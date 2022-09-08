export default function Footer() {
    const year = new Date().getFullYear()
    return (
        <section className="pt-6">
            <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex justify-between gap-2 border-t text-sm text-slate-400">
                <div>Copyright {year} Shahrear ahamed.</div>
                <div>
                    <a
                        href="https://facebook.com/its.shahrear"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Profile
                    </a>
                </div>
            </div>
        </section>
    );
}
