package com.catdog.web.lamda;

public class GenericTest {
	static class Box<T>{//inner class(내부 클래스)
		T item;
		void setItem(T item) {this.item = item;}
		T getItem() {return item;}
	}
	 public static void main(String[] args) {
		GenericTest.Box<String> g = new GenericTest.Box<>();
	}
}
