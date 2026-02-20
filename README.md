! npm audit reports a known ReDoS vulnerability in ajv, used
transitively by ESLint (dev dependency only). ESLint does not
process untrusted input at runtime, and the advisory currently
has no upstream fix. Production code is unaffected.
