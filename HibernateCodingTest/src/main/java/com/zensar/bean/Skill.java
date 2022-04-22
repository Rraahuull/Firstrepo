package com.zensar.bean;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="skill")
public class Skill {
	@Id
	int skillLevel;
	@Column
	String skillName;
	
	public Skill() {
		super();
	}
	
	public Skill(String skillName) {
		super();
		this.skillName = skillName;
	}

	public Skill(int skillLevel, String skillName) {
		super();
		this.skillLevel = skillLevel;
		this.skillName = skillName;
	}

	public int getSkillLevel() {
		return skillLevel;
	}

	public void setSkillLevel(int skillLevel) {
		this.skillLevel = skillLevel;
	}

	public String getSkillName() {
		return skillName;
	}

	public void setSkillName(String skillName) {
		this.skillName = skillName;
	}

	@Override
	public String toString() {
		return "Skill [skillLevel=" + skillLevel + ", skillName=" + skillName + "]";
	}
	
	
}
