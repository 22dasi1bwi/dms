package de.saio.dms

import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.ControllerAdvice
import org.springframework.web.bind.annotation.ExceptionHandler
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler

@ControllerAdvice
class JokeDoesNotExistExceptionHandler : ResponseEntityExceptionHandler() {

    @ExceptionHandler(JokeDoesNotExistException::class)
    fun handle (ex: JokeDoesNotExistException) =
            ResponseEntity.status(HttpStatus.NOT_FOUND).body(ErrorResponse(ex.errorMessage))
}

data class ErrorResponse(val message: String)