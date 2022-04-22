package com.zensar;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;

import com.zensar.bean.Address;
import com.zensar.bean.BankAccount;
import com.zensar.bean.Employee;
import com.zensar.bean.Skill;
import com.zensar.util.JPAUtil;

public class App {
	public static void loadTesting() {
		EntityManager em=JPAUtil.createEntityManager("PU");
		Employee employee=em.find(Employee.class, 1);
		System.out.println(employee);
		JPAUtil.shutDown();
	}
	public static void insertTesting() {
		EntityManager em=JPAUtil.createEntityManager("PU");
		Employee employee=new Employee("Rahul",12345.00,null);
		Address address=new Address(1,"chennai","600077",null);
		BankAccount bankAccount=new BankAccount(10, "20301234512");
		Skill skill=new Skill(10, "SQL");
		List<Skill> skillList=new ArrayList<Skill>();
		skillList.add(skill);
		employee.setAddress(address);
		employee.setAccount(bankAccount);
		employee.getSkillList();
		em.getTransaction().begin();
		em.persist(employee);
		em.getTransaction().commit();
	}
  public static void main(String[] args) {
	  insertTesting();
  }
}
