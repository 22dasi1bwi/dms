package de.saio.dms

data class JokeDoesNotExistException(val errorMessage: String) : RuntimeException()