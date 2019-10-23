package com.catdog.web.lamda;

import java.util.ArrayList;
//로직 연습할 때 테스트에서 연습하면됨!
public class LamdaList {
	public static void main(String[] args) {
		ArrayList<Integer> list = new ArrayList<>();
		for(int i=0;i<10;i++)
			list.add(i);
		list.forEach(i->System.out.print(i+",\t"));//consumer .accept()
		System.out.println();
		
		list.removeIf(i-> i%2==0);//리턴이 있는거 supplier .get()
		list.forEach(i->System.out.print(i+",\t"));
		System.out.println();
		
		list.replaceAll(i->i*10);
		list.forEach(i->System.out.print(i+",\t"));
	}
}
