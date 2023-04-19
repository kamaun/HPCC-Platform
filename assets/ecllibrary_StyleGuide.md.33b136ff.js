import{_ as a,c as s,o as e,a as n}from"./app.28778c7e.js";const y=JSON.parse('{"title":"ECL standard library style guide","description":"","frontmatter":{},"headers":[],"relativePath":"ecllibrary/StyleGuide.md"}'),l={name:"ecllibrary/StyleGuide.md"},t=n(`<h1 id="ecl-standard-library-style-guide" tabindex="-1">ECL standard library style guide <a class="header-anchor" href="#ecl-standard-library-style-guide" aria-hidden="true">#</a></h1><p>The ECL code in the standard library should follow the following style guidelines:</p><ul><li>All ECL keywords in upper case</li><li>ECL reserved types in upper case</li><li>Public attributes in camel case with leading upper case</li><li>Private attributes in lower case with underscore as a separator</li><li>Field names in lower case with underscore as a separator</li><li>Standard indent is 2 spaces (no tabs)</li><li>Maximum line length of 120 characters</li><li>Compound statements have contents indented, and END is aligned with the opening statement</li><li>Field names are not indented to make them line up within a record structure</li><li>Parameters are indented as necessary</li><li>Use javadoc style comments on all functions/attributes (see <a href="http://java.sun.com/j2se/javadoc/writingdoccomments/" target="_blank" rel="noreferrer">Writing Javadoc Comments</a>)</li></ul><p>For example:</p><div class="language-ecl"><button title="Copy Code" class="copy"></button><span class="lang">ecl</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">my_record := RECORD</span></span>
<span class="line"><span style="color:#A6ACCD;">    INTEGER4 id;</span></span>
<span class="line"><span style="color:#A6ACCD;">    STRING firstname{MAXLENGTH(40)};</span></span>
<span class="line"><span style="color:#A6ACCD;">    STRING lastname{MAXLENGTH(50)};</span></span>
<span class="line"><span style="color:#A6ACCD;">END;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/**</span></span>
<span class="line"><span style="color:#A6ACCD;">  * Returns a dataset of people to treat with caution matching a particular lastname.  The</span></span>
<span class="line"><span style="color:#A6ACCD;">  * names are maintained in a global database of undesirables.</span></span>
<span class="line"><span style="color:#A6ACCD;">  *</span></span>
<span class="line"><span style="color:#A6ACCD;">  * @param  search_lastname    A lastname used as a filter</span></span>
<span class="line"><span style="color:#A6ACCD;">  * @return                    The list of people</span></span>
<span class="line"><span style="color:#A6ACCD;">  * @see                       NoFlyList</span></span>
<span class="line"><span style="color:#A6ACCD;">  * @see                       MorePeopleToAvoid</span></span>
<span class="line"><span style="color:#A6ACCD;">  */</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">EXPORT DodgyCharacters(STRING search_lastname) := FUNCTION</span></span>
<span class="line"><span style="color:#A6ACCD;">    raw_ds := DATASET(my_record, &#39;undesirables&#39;, THOR);</span></span>
<span class="line"><span style="color:#A6ACCD;">    RETURN raw_ds(last_name = search_lastname);</span></span>
<span class="line"><span style="color:#A6ACCD;">END;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>Some additional rules for attributes in the library:</p><ul><li>Services should be SHARED and EXPORTed via intermediate attributes</li><li>All attributes must have at least one matching test. If you&#39;re not on the test list you&#39;re not coming in.</li></ul>`,7),i=[t];function r(o,p,c,d,C,A){return e(),s("div",null,i)}const m=a(l,[["render",r]]);export{y as __pageData,m as default};
