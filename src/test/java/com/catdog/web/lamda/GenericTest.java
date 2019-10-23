package com.catdog.web.lamda;

import com.catdog.web.cur.Customer;

public class GenericTest {
	static class Box<T>{//inner class(내부 클래스)
		T item;
		void setItem(T item) {this.item = item;}
		T getItem() {return item;}
	}
	 public static void main(String[] args) {
		GenericTest.Box<String> g = new GenericTest.Box<>();
		GenericTest.Box<Integer> g1 = new GenericTest.Box<>();// 지네릭스를 쓰면 박스안에 타입을 이렇게 써줄 수 있다.
		GenericTest.Box<Customer> g2 = new GenericTest.Box<>();
	}
}
