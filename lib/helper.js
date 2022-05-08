// Helper function, capitalizes str
const capitalize = (str) => {
	let temp = str.toLowerCase().split(' ');
	let ans = '';
	for (word of temp) {
		ans += word[0].toUpperCase() + word.substr(1) + ' ';
	}
	return ans.trim();
};

module.exports.capitalize = capitalize;
