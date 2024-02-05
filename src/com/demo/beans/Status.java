package com.demo.beans;

public class Status {
	private int status_id;
	private int pending;
	private int successfull;
	
	public Status() {
		super();
	}

	public Status(int status_id, int pending, int successfull) {
		super();
		this.status_id = status_id;
		this.pending = pending;
		this.successfull = successfull;
	}

	public int getStatus_id() {
		return status_id;
	}

	public void setStatus_id(int status_id) {
		this.status_id = status_id;
	}

	public int getPending() {
		return pending;
	}

	public void setPending(int pending) {
		this.pending = pending;
	}

	public int getSuccessfull() {
		return successfull;
	}

	public void setSuccessfull(int successfull) {
		this.successfull = successfull;
	}

	@Override
	public String toString() {
		return "Status [status_id=" + status_id + ", pending=" + pending + ", successfull=" + successfull + "]";
	}
}
