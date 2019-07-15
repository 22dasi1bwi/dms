package de.saio.dms

import org.springframework.stereotype.Controller
import org.springframework.ui.Model
import org.springframework.web.bind.annotation.GetMapping

@Controller
class DmsResource {

    @GetMapping("/")
    fun index (model: Model) : String {
        model.addAttribute("eventName", "FIFA 2018")
        return "index"
    }
}