package com.catdog.web.test;
import java.util.Scanner;
public class Test {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int totalCount = scan.nextInt();
		int pageNum = scan.nextInt();
		
		int pageSize = 5;
		int blockSize = 5;
		
		int pageCount = (totalCount % pageSize==0) ? totalCount/pageSize : (totalCount/pageSize)+1;
		int blockCount = (pageCount % blockSize==0)? pageCount/blockSize : (pageCount/blockSize)+1;
		int blocknum = (pageNum-1)/blockSize;
		System.out.println(pageCount);
		System.out.println(blockCount);
		System.out.println(blocknum);
	}
}
