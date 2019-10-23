package com.catdog.web.utl;

import java.util.function.Consumer;

import org.springframework.stereotype.Service;

import com.catdog.web.cmm.IConsumer;
@Service
public class Printer implements IConsumer{//서비스 ,서비스임플은 안쓴다 이제 5로 넘어오면서 
	@Override
	public void accept(Object o) {
		Consumer<String> consumer = System.out :: println;
		consumer.accept((String)o);
	}

}
