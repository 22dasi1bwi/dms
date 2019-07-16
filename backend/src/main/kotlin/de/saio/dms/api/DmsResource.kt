package de.saio.dms.api

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.ResponseBody
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api")
class DmsResource {

    @GetMapping("/hello")
    fun hello () = Foo("lol")

}

data class Foo(val value: String)