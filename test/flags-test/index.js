/**
 * Test to verify if we support strict mode (flags)
 *
 * @author Jared Allard <jaredallard@outlook.com>
 * @version 0.0.1
 * @license MIT
 **/

 // "use strict"; w/o --use_strict

 var isStrict = (function() { return !this; })();

 console.log('test:strict-mode:status =', isStrict);
