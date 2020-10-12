module.exports = function toReadable (number) {
    const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if( number === 0) {
        return 'zero';
    }
    let str = '';
    n = ('000000000' + number).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    
    str += (n[4] != 0) ? (units[Number(n[4])] || tens[n[4][0]] + ' ' + units[n[4][1]]) + ' hundred ' : '';
    str += (n[5] != 0) ? (units[Number(n[5])] || tens[n[5][0]] + ' ' + units[n[5][1]]) : '';
    return str.trim();
}
