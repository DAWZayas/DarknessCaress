<div className="HeroStats">
  <span>{ selectedUnit.name } </span> <br/>
  <span>  Attack: { selectedUnit.attack }. Defense: { selectedUnit.defense }. Sp attack: { selectedUnit.sp_atk }. Sp defense: { selectedUnit.sp_def }.</span><br/>
  <span>  HP: { selectedUnit.hp }. Movement: { selectedUnit.movement }. { this.booleanToString(selectedUnit.fly) } unit. Range: { this.rangeToString(selectedUnit.range) }.</span>
</div>

<span> { highlightedSquare.name.slice(0, 1).toUpperCase() + highlightedSquare.name.slice(1) }. Defense: { highlightedSquare.defense }. Dodge: { highlightedSquare.avoid }. X: { highlightedPosition[0] }. Y: { highlightedPosition[1] }.</span><br/>
