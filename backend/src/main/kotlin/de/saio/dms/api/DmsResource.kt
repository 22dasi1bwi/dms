package de.saio.dms.api

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping

@Controller
class DmsResource {

    @GetMapping
    fun hello () = "foobar"

}