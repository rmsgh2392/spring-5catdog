package com.catdog.web.lamda;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;
import java.util.function.Function;
import java.util.function.Predicate;
import java.util.function.Supplier;

public class LamdaEx5 {
	public static void main(String[] args) {
		Supplier<Integer> s = () ->(int)(Math.random()*100)+1;//서블라이는 매개변수는 없고 리턴타입만 있으니까 리턴타입만 정해줌
		Consumer<Integer> c = i -> System.out.print(i+",");
		Predicate<Integer> p = i ->i%2==0;
		Function<Integer,Integer> f = i->i/10*10;
		List<Integer> list = new ArrayList<>();
		makeRandomList(s,list);
		System.out.println(list);
		printEvenNum(p,c,list);
		List<Integer> newList = doSomething(f, list);
		System.out.println(newList);
	}
	
	static <T> void makeRandomList(Supplier<T> s ,List<T> list) {
		//fm되로하면 인터페이스 걸어서 메서드 하나만 만들어줘야한다 (스태틱도 한개)
		//스프링에서는 메서드는 static으로 한다고 생각하자
		for(int i=0; i<10;i++)
			list.add(s.get());
	}
	static <T> void printEvenNum(Predicate<T> p ,Consumer<T> c, List<T> list) {
		System.out.print("[");
		for(T i : list) 
			if(p.test(i))
				c.accept(i);
		//인덴트를 잘 맞춰줘야 한다 {}를 생략하면
		System.out.println("]");
	}
	static <T> List<T> doSomething(Function<T, T> f, List<T> list){
		//<T>는 전역으로 타입을 정해준거임 한가지 타입만 써라
		//파라미터 T에 스트링값을 줫으면 스트링값을 맞춰줘야하고 유지 해야 한다 그럼 캐스팅이 필요 없음
		//아직정해주지 않음 무엇이 들어올지 모르고 타입체크를 하지 않아도 된다.
		List<T> newList = new ArrayList<T>(list.size());
		for(T i : list) 
			newList.add(f.apply(i));
			return newList;
	}
}
