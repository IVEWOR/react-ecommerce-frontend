export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-[#efefef] text-xs py-4 text-center">
            No Rights Reserved &copy; {currentYear} &#x2022; Designed by&nbsp;
            <a className="underline " href="https://deepslog.com">deepslog</a>
        </footer>
    )
}