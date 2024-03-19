package com.demo.beans;

public class Category {
	private String category_id;
	private String category;
	
	public Category() {
		super();
	}

	public Category(String category_id, String category) {
		super();
		this.category_id = category_id;
		this.category = category;
	}

	public String getCategory_id() {
		return category_id;
	}

	public void setCategory_id(String category_id) {
		this.category_id = category_id;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	@Override
	public String toString() {
		return "Category [category_id=" + category_id + ", category=" + category + "]";
	}
	
	
}
