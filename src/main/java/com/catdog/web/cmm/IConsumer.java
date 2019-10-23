package com.catdog.web.cmm;
@FunctionalInterface//함수형 인터페이스라고 알려주는 에너테이션
public interface IConsumer {
	public abstract void accept(Object o);//추상메서드 키워드 abstract
}
