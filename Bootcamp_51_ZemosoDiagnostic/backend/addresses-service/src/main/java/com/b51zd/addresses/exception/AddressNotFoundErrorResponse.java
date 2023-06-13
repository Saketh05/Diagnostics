package com.b51zd.addresses.exception;

public class AddressNotFoundErrorResponse {

    private int status;
    private String message;
    private Long timeStamp;

    public AddressNotFoundErrorResponse(){}

    public AddressNotFoundErrorResponse(int status, String message, Long timeStamp){
        this.status = status;
        this.message = message;
        this.timeStamp = timeStamp;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Long getTimeStamp() {
        return timeStamp;
    }

    public void setTimeStamp(Long timeStamp) {
        this.timeStamp = timeStamp;
    }
}
