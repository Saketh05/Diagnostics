package com.b51zd.patients.api.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class PatientNotFoundExceptionHandler {

    @ExceptionHandler
    public ResponseEntity<PatientNotFoundErrorResponse> handleException(PatientNotFoundException exc){
        PatientNotFoundErrorResponse error = new PatientNotFoundErrorResponse(HttpStatus.NOT_FOUND.value(), exc.getMessage(),System.currentTimeMillis());
        return new ResponseEntity<>(error,HttpStatus.NOT_FOUND);
    }


    @ExceptionHandler
    public ResponseEntity<PatientNotFoundErrorResponse> handleException(Exception exc){
        PatientNotFoundErrorResponse error = new PatientNotFoundErrorResponse(HttpStatus.BAD_REQUEST.value(), exc.getMessage(),System.currentTimeMillis());
        return new ResponseEntity<>(error,HttpStatus.BAD_REQUEST);
    }
}
