if(event.skill.id==ground_id) {
			clearTimeout(isCD_ground_timeOut)
			isCD_ground = true
			isCD_ground_timeOut = setTimeout(function () {
				isCD_ground = false
			}, event.cooldown)
		}
		if(event.skill.id==dream_id) {
			clearTimeout(isCD_dream_timeOut)
			isCD_dream = true
			isCD_dream_timeOut = setTimeout(function () {
				isCD_dream = false
			}, event.cooldown)
		}
		if(event.skill.id==crescent_id) {
			clearTimeout(isCD_crescent_timeOut)
			isCD_crescent = true
			isCD_crescent_timeOut = setTimeout(function () {
				isCD_crescent = false
			}, event.cooldown)
		}
		if(event.skill.id==crescent_id + 1) {
			clearTimeout(isCD_crescent_1_timeOut)
			isCD_crescent_1 = true
			isCD_crescent_1_timeOut = setTimeout(function () {
				isCD_crescent_1 = false
			}, event.cooldown)
		}		
		
		if(event.skill.id==ragnarok_id) {
			clearTimeout(isCD_ragnarok_timeOut)
			isCD_ragnarok = true
			isCD_ragnarok_timeOut = setTimeout(function () {
				isCD_ragnarok = false
			}, event.cooldown)
		}
