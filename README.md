# hover-tooltips-hdevtools

This [Atom](http://atom.io) package displays the type
of an identifier (in a Haskell source file) as a tooltip.
The type is obtained using `hdevtools`.

![Screenshot of hover-tooltips-hdevtools](https://github.com/fixme)

## Usage

+ Install `hdevtools` e.g. via `cabal install hdevtools`
+ Place mouse over identifier, and presto!

**Note:** types will only be displayed if there are no
*errors* in the source file. Thus, this package goes well
with [linter-hdevtools](https://github.com/ranjitjhala/linter-hdevtools.git)
which will quickly lint source and highlight errors etc.

## Configuration

+ Tweak `styles/hover-tooltips-hdevtools.less` to change fonts etc.
+ Tweak `executablePath` if your `hdevtools` is hiding outside of `$PATH`

## Inspirations

+ ![ide-haskell](http://atom-haskell.github.io/ide-haskell)
+ ![atom-typescript](https://github.com/TypeStrong/atom-typescript)
