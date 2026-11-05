# site-kit renderer, Python twin of render.mjs. A FRAGMENT, not a module: it is inlined into dashboard.py between the
# site-kit markers and relies on `html`, `json` and `re` being imported there. SK_FILES / SK_VERSION come from the block.
SK_NAV = json.loads(SK_FILES["nav.json"])


def _sk_expand(template: str, variables: dict[str, str], sites: list[dict[str, str]]) -> str:
    def one(body: str, s: dict[str, str]) -> str:
        return re.sub(r"\{\{s\.(\w+)\}\}", lambda k: s["cur"] if k[1] == "cur" else html.escape(s[k[1]]), body)

    def loop(m: re.Match[str]) -> str:
        return "".join(one(m[1], s) for s in sites)

    def var(m: re.Match[str]) -> str:
        if m[1] not in variables:
            raise KeyError(f"site-kit: unknown placeholder {{{{{m[1]}}}}}")
        return html.escape(variables[m[1]])

    return re.sub(r"\{\{(\w+)\}\}", var, re.sub(r"\{\{#sites\}\}([\s\S]*?)\{\{/sites\}\}", loop, template))


def _sk_context(current: str) -> tuple[dict[str, str], list[dict[str, str]]]:
    sites = SK_NAV["sites"]
    site = next(s for s in sites if s["id"] == current)
    variables = {
        "version": SK_VERSION,
        "site_id": site["id"],
        "site_name": site["name"],
        "site_url": site["url"],
        "repo_url": f"https://github.com/{site['repo']}",
        "repo_name": site["repo"],
        "portfolio_url": sites[0]["url"],
        "identity": SK_NAV["identity"],
    }
    return variables, [{**s, "cur": ' aria-current="true"' if s["id"] == current else ""} for s in sites]


def sk_header(current: str) -> str:
    variables, sites = _sk_context(current)
    return _sk_expand(SK_FILES["header.html"], variables, sites)


def sk_footer(current: str) -> str:
    variables, sites = _sk_context(current)
    return _sk_expand(SK_FILES["footer.html"], variables, sites)


def sk_pagehead(eyebrow: str, title: str, lede: str) -> str:
    return _sk_expand(SK_FILES["pagehead.html"], {"eyebrow": eyebrow, "title": title, "lede": lede}, [])


def sk_css() -> str:
    return SK_FILES["tokens.css"] + "\n" + SK_FILES["shell.css"]
