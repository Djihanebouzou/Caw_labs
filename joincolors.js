function joincolors(colors) {
    return {
        toString: colors.toString(),
        joinDefault: colors.join(),
        joinNoSeparator: colors.join('')
    };
}

module.exports = { joincolors };
