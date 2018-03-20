package de.conpinion.vuejs.startervuejs

import com.github.salomonbrys.kotson.fromJson
import com.google.gson.Gson
import io.vertx.core.Vertx
import io.vertx.core.eventbus.Message
import io.vertx.ext.web.Router
import io.vertx.ext.web.handler.StaticHandler
import io.vertx.ext.web.handler.sockjs.BridgeOptions
import io.vertx.ext.web.handler.sockjs.SockJSHandler
import io.netty.handler.codec.http.HttpMethod.PUT
import io.netty.handler.codec.http.HttpMethod.PATCH
import io.netty.handler.codec.http.HttpMethod.POST
import io.netty.handler.codec.http.HttpResponseStatus
import io.vertx.core.http.HttpMethod
import io.vertx.core.json.JsonObject
import io.vertx.ext.bridge.PermittedOptions
import io.vertx.ext.web.handler.BodyHandler
import io.vertx.ext.web.handler.CorsHandler
import java.io.StringReader
import java.util.HashSet

data class Profile(val r: Int, val g: Int, val b: Int, val lang: String)

class StaticWebSite {
  var profile: Profile = Profile(0, 0, 0, "de")

  fun serve() {
    val vertx: Vertx = Vertx.vertx()
    var server = vertx.createHttpServer()
    var router = Router.router(vertx)
    setCorsPermissions(router)
    router.route("/eventbus/*").handler(createSockJSHandler(vertx))
    createProfileRoutes(vertx, router)
    router.route("/*").handler(StaticHandler.create().setWebRoot("."))

    vertx.createHttpServer().requestHandler({ router.accept(it) }).listen(8085)

    vertx.eventBus().consumer("support-incoming") { message: Message<JsonObject> ->
      println("Message ${message.body().toString()}")
      message.reply("ok")
      vertx.eventBus().send("support-outbound", message.body())
    }
    println("Vertx started")
  }

  private fun createProfileRoutes(vertx: Vertx, router: Router) {
    router.get("/profile").handler { request ->
      val gson = Gson()
      vertx.setTimer(5000) {
        request.response().setChunked(true).write(gson.toJson(profile)).end()
      }
    }
    router.post("/profile").handler(BodyHandler.create()).handler { request ->
      vertx.setTimer(2000) {
        val gson = Gson()
        profile = gson.fromJson<Profile>(request.getBodyAsString())
        request.response().setStatusCode(HttpResponseStatus.OK.code()).end()
      }
    }
  }

  private fun setCorsPermissions(router: Router) {
    val allowedHeaders = HashSet<String>()
    allowedHeaders.add("x-requested-with")
    allowedHeaders.add("Access-Control-Allow-Origin")
    allowedHeaders.add("origin")
    allowedHeaders.add("Content-Type")
    allowedHeaders.add("accept")
    allowedHeaders.add("X-PINGARUNER")

    val allowedMethods = HashSet<HttpMethod>()
    allowedMethods.add(HttpMethod.GET)
    allowedMethods.add(HttpMethod.POST)
    allowedMethods.add(HttpMethod.OPTIONS)
    /*
     * these methods aren't necessary for this sample,
     * but you may need them for your projects
     */
    allowedMethods.add(HttpMethod.DELETE)
    allowedMethods.add(HttpMethod.PATCH)
    allowedMethods.add(HttpMethod.PUT)

    router.route().handler(CorsHandler.create("*").allowedHeaders(allowedHeaders).allowedMethods(allowedMethods))
  }

  private fun createSockJSHandler(vertx: Vertx): SockJSHandler? {
    var sockJSHandler = SockJSHandler.create(vertx)
    val opts = BridgeOptions()
      .addInboundPermitted(PermittedOptions()
        .setAddress("support-incoming"))
      .addOutboundPermitted(PermittedOptions()
        .setAddress("support-outbound"))
    sockJSHandler.bridge(opts)
    return sockJSHandler
  }
}

fun main(args: Array<String>) {
  StaticWebSite().serve()
}
