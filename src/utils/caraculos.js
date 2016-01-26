function calculateDamage(type, champAtt, champDef) {
	return type==='special'? 
		calculateSp_Attack(champAtt, champDef) :
		calculateAttack(champAtt, champDef);
}

function calculateAttack(champAtt, champDef) {
	let attack = champAtt.getAttack();
	let defense = champDef.getDefense();
	let base = champAtt.getSkill();
	let critical = randomBool() ? 1 : 2;
	return (((100+10)/250))*(attack/defense)*base+2)*critical;
}

function calculateSp_Attack(champAtt, champDef) {
	let sp_attack = champAtt.getSp_Attack();
	let sp_defense = champDef.getSp_Defense();
	let base = champAtt.getSkill();
	let critical = randomBool() ? 1 : 2;
	return (((100+10)/250))*(sp_attack/sp_defense)*base+2)*critical;
}

function calculateHP(champ){
	let base = champ.getHp();
	return ((base+31)*2+(2.795)*50)/100)+60;
}
