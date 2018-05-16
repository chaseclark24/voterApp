


var voter = function() {
LocalContractStorage.defineMapProperty(this, "voters");
LocalContractStorage.defineMapProperty(this, "votes");
}

voter.prototype = {
	init: function () {
    this.votes.put("0","0");
    this.votes.put("1","0");
  	},

	saveVote: function (value) {
		var from = Blockchain.transaction.from;

		var voterExists = this.voters.get(from);
		if (voterExists){
			throw new Error("You may only vote one time.");
		}

		this.voters.put(Blockchain.transaction.from, "test");
		
		current = this.votes.get(value);
		current = JSON.parse(current);
		newCount = current + 1;
		this.votes.del(value);
		this.votes.put(value, newCount);
		

	},

	getVotes: function () {
		var bad = this.votes.get("0");
		var good = this.votes.get("1");
		var outStr = bad + "::" + good;
		return outStr;
	}




}

module.exports = voter