<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Probability Density Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Truncated normal][truncated-normal-distribution] distribution probability density function (PDF).

<section class="intro">

A normally distributed random variable `X` conditional on `a < X < b` is called a [truncated normal][truncated-normal-distribution] distribution.
The [probability density function][pdf] (PDF) for a [truncated normal][truncated-normal-distribution] random variable is

<!-- <equation class="equation" label="eq:truncated_normal_pdf" align="center" raw="f(x;\mu,\sigma,a,b) =  \begin{cases} \frac{\frac{1}{\sigma}\phi(\frac{x - \mu}{\sigma})}{\Phi(\frac{b - \mu}{\sigma}) - \Phi(\frac{a - \mu}{\sigma}) } & \text{ if } a < x < b \\ 0 & \text{ otherwise } \end{cases}" alt="Probability density function (PDF) for a truncated normal distribution."> -->

```math
f(x;\mu,\sigma,a,b) =  \begin{cases} \frac{\frac{1}{\sigma}\phi(\frac{x - \mu}{\sigma})}{\Phi(\frac{b - \mu}{\sigma}) - \Phi(\frac{a - \mu}{\sigma}) } & \text{ if } a < x < b \\ 0 & \text{ otherwise } \end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="f(x;\mu,\sigma,a,b) =  \begin{cases} \frac{\frac{1}{\sigma}\phi(\frac{x - \mu}{\sigma})}{\Phi(\frac{b - \mu}{\sigma}) - \Phi(\frac{a - \mu}{\sigma}) } &amp; \text{ if } a &lt; x &lt; b \\ 0 &amp; \text{ otherwise } \end{cases}" data-equation="eq:truncated_normal_pdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/truncated-normal/pdf/docs/img/equation_truncated_normal_pdf.svg" alt="Probability density function (PDF) for a truncated normal distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `Phi` and `phi` denote the [cumulative distribution function][cdf] and [density function][pdf] of the [normal][normal-distribution] distribution, respectively, `mu` is the location  and `sigma > 0` is the scale parameter of the distribution. `a` and `b` are the minimum and maximum support.

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import pdf from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-truncated-normal-pdf@esm/index.mjs';
```
The previous example will load the latest bundled code from the esm branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/stats-base-dists-truncated-normal-pdf/tags). For example,

```javascript
import pdf from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-truncated-normal-pdf@v0.1.0-esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { factory } from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-truncated-normal-pdf@esm/index.mjs';
```

#### pdf( x, a, b, mu, sigma )

Evaluates the probability density function (PDF) for a [truncated normal][truncated-normal-distribution] distribution with lower limit `a`, upper limit `b`, location parameter `mu`, and scale parameter `sigma`.

```javascript
var y = pdf( 0.9, 0.0, 1.0, 0.0, 1.0 );
// returns ~0.7795

y = pdf( 0.9, 0.0, 1.0, 0.5, 1.0 );
// returns ~0.9617

y = pdf( 0.9, -1.0, 1.0, 0.5, 1.0 );
// returns ~0.5896

y = pdf( 1.4, 0.0, 1.0, 0.0, 1.0 );
// returns 0.0

y = pdf( -0.9, 0.0, 1.0, 0.0, 1.0 );
// returns 0.0
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = pdf( NaN, 0.0, 1.0, 0.5, 2.0 );
// returns NaN

y = pdf( 0.0, NaN, 1.0, 0.5, 2.0 );
// returns NaN

y = pdf( 0.0, 0.0, NaN, 0.5, 2.0 );
// returns NaN

y = pdf( 0.6, 0.0, 1.0, NaN, 2.0 );
// returns NaN

y = pdf( 0.6, 0.0, 1.0, 0.5, NaN );
// returns NaN
```

#### pdf.factory( a, b, mu, sigma )

Returns a function for evaluating the [probability density function][pdf] (PDF) for a [truncated normal][truncated-normal-distribution] distribution.

```javascript
var myPDF = pdf.factory( 0.0, 1.0, 0.0, 1.0 );
var y = myPDF( 0.8 );
// returns ~0.849

myPDF = pdf.factory( 0.0, 1.0, 0.5, 1.0 );
y = myPDF( 0.8 );
// returns ~0.996
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@esm/index.mjs';
import pdf from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-truncated-normal-pdf@esm/index.mjs';

var sigma;
var mu;
var a;
var b;
var x;
var y;
var i;

for ( i = 0; i < 25; i++ ) {
    a = ( randu() * 80.0 ) - 40.0;
    b = a + ( randu() * 80.0 );
    x = ( randu() * 40.0 ) + a;
    mu = ( randu() * 20.0 ) - 10.0;
    sigma = ( randu() * 10.0 ) + 2.0;
    y = pdf( x, a, b, mu, sigma );
    console.log( 'x: %d, a: %d, b: %d, mu: %d, sigma: %d, f(x;a,b,mu,sigma): %d', x.toFixed( 4 ), a.toFixed( 4 ), b.toFixed( 4 ), mu.toFixed( 4 ), sigma.toFixed( 4 ), y.toFixed( 4 ) );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-truncated-normal-pdf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-truncated-normal-pdf

[test-image]: https://github.com/stdlib-js/stats-base-dists-truncated-normal-pdf/actions/workflows/test.yml/badge.svg?branch=v0.1.0
[test-url]: https://github.com/stdlib-js/stats-base-dists-truncated-normal-pdf/actions/workflows/test.yml?query=branch:v0.1.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-truncated-normal-pdf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-truncated-normal-pdf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-truncated-normal-pdf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-truncated-normal-pdf/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-truncated-normal-pdf/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-dists-truncated-normal-pdf/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-dists-truncated-normal-pdf/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-base-dists-truncated-normal-pdf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-truncated-normal-pdf/main/LICENSE

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

[normal-distribution]: https://en.wikipedia.org/wiki/Normal_distribution

[truncated-normal-distribution]: https://en.wikipedia.org/wiki/Truncated_normal_distribution

</section>

<!-- /.links -->
