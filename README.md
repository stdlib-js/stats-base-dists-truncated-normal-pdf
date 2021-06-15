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

# Probability Density Function

[![NPM version][npm-image]][npm-url] [![dependencies][dependencies-image]][dependencies-url]

> [Truncated normal][truncated-normal-distribution] distribution probability density function (PDF).

<section class="intro">

A normally distributed random variable `X` conditional on `a < X < b` is called a [truncated normal][truncated-normal-distribution] distribution.
The [probability density function][pdf] (PDF) for a [truncated normal][truncated-normal-distribution] random variable is

<!-- <equation class="equation" label="eq:truncated_normal_pdf" align="center" raw="f(x;\mu,\sigma,a,b) =  \begin{cases} \frac{\frac{1}{\sigma}\phi(\frac{x - \mu}{\sigma})}{\Phi(\frac{b - \mu}{\sigma}) - \Phi(\frac{a - \mu}{\sigma}) } & \text{ if } a < x < b \\ 0 & \text{ otherwise } \end{cases}" alt="Probability density function (PDF) for a truncated normal distribution."> -->

<div class="equation" align="center" data-raw-text="f(x;\mu,\sigma,a,b) =  \begin{cases} \frac{\frac{1}{\sigma}\phi(\frac{x - \mu}{\sigma})}{\Phi(\frac{b - \mu}{\sigma}) - \Phi(\frac{a - \mu}{\sigma}) } &amp; \text{ if } a &lt; x &lt; b \\ 0 &amp; \text{ otherwise } \end{cases}" data-equation="eq:truncated_normal_pdf">
    <img src="https://cdn.rawgit.com/stdlib-js/stdlib/7e0a95722efd9c771b129597380c63dc6715508b/lib/node_modules/@stdlib/stats/base/dists/truncated-normal/pdf/docs/img/equation_truncated_normal_pdf.svg" alt="Probability density function (PDF) for a truncated normal distribution.">
    <br>
</div>

<!-- </equation> -->

where `Phi` and `phi` denote the [cumulative distribution function][cdf] and [density function][pdf] of the [normal][normal-distribution] distribution, respectively, `mu` is the location  and `sigma > 0` is the scale parameter of the distribution. `a` and `b` are the minimum and maximum support.

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-truncated-normal-pdf
```

</section>

<section class="usage">

## Usage

```javascript
var pdf = require( '@stdlib/stats-base-dists-truncated-normal-pdf' );
```

#### pdf( x, a, b, mu, sigma )

#### pdf.factory( a, b, mu, sigma )

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript

```

</section>

<!-- /.examples -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-truncated-normal-pdf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-truncated-normal-pdf

[test-image]: https://github.com/stdlib-js/stats-base-dists-truncated-normal-pdf/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/stats-base-dists-truncated-normal-pdf/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-truncated-normal-pdf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-truncated-normal-pdf?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-truncated-normal-pdf
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-truncated-normal-pdf/main

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-truncated-normal-pdf/main/LICENSE

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

[normal-distribution]: https://en.wikipedia.org/wiki/Normal_distribution

[truncated-normal-distribution]: https://en.wikipedia.org/wiki/Truncated_normal_distribution

</section>

<!-- /.links -->
