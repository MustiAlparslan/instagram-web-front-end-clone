function Tagged(){

	const Svg = () => {
		return <svg xmlns="http://www.w3.org/2000/svg" version="1.2" viewBox="0 0 105 77" width="105" height="77"><defs><image width="62" height="62" id="img1" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAA+CAMAAABEH1h2AAAAAXNSR0IB2cksfwAAAJxQTFRF+vr66urq1dXVsbGxioqKYWFhQkJCNjY2JycnpqamcnJySkpKJiYmVFRUzs7OfX19PDw8MDAwhYWFtbW15eXl6urq7u7u8PDwxsbGbm5uKysr2djY+vr6+fn53Nzc9vb2+fn5rKysR0dHW1pblpaWwcHB7u7uycnJ4eHh9vb2vb29np6eQEBA4eHhgYGB8vLydnZ23Nzca2trkZGRpeZLRwAAADR0Uk5TAAD/////////////////////////////////////4P8A//////8A/5AA/////////////++13woAAAMgSURBVHicpVdre6owDMZibeTaTtRa8DjQjQ2d7PL//9vhJrTaOvfwftI0L2mTNEktS48Jsqd4RgDIDE9tNDGo6blzx/Uqputj7LvVNzzXmT/6hSCkwPynBYqWq/V6tYzQ4slnQMPgATLfCMDzOEmSbSIhnmMQG/4L+V/oCSfYJRrsAkd44b875OeUghPouC0CB2j6bGJPQshsM7mGnUFo8GG8Bye6z06SyIF9rGMjVxy2v7Erhx6EizTsGftl4/0B2OyGH2fk5TF2kryQ7Gr/rz48aLuxD/6rErEQDlpFzrXiA4Ry/FJwtF7LKc118q0D6WD7jWbaiHFKCNXajzL61vNDWOhtkzwnevsLCC9sDhvd1it2ZZnr+dsNdPfnfcOkPF8VxxaHGWn2zcns0ImK1aAXsM17Qw+E5Lci8zzR4tSeestPncDzsmIw74igO/lgvGD0mKMGwcdF+BG0kvxI2cAP2tNPKO7v99ond+5rRSH++vJ7h+mkifl88JZ3vsdOkrM3+HHexN5hcS9ZQHqfnkohjplTZbvrD7VpcZUAZRSVikBW2Pnuq4XEk361AseMYSXrFIWzQJYtC1S6LYjjECFfRUXBBtuaAjKsRqesWkLZKTIoIJhamJhWOzcp7lS/T7A1c5eG1aPX5EDgHQ0KS3dmEX9lWLVbs6lchxSFlU8swGvD6jKjfLfjNDNtb43hDr0qiWK/F0oJvaGbN1+59vN0+kSy5GbzZtfpcOM6U+DK4njocCxKLb0OnCFtvjBIwF86ep02tjYu5Tf8oLgD+oHvUkOvkxaJs4aeQygfOYRcQ6+vjP7CLtSeZQ/yqwt7VS4uaqSQ6QXR0JtyoRSrfnW3Vuab/q9Mb4uVXCr/Uqy6UikX6lyEetoFoehLZVeo5TZR7pm+I3fgbH/JoL5NSE1qGxB2tgsD7DMb2kDfpJQWyX0PjPD8fm9Di1QbdMnTuQEpH6q21KAt03hghjIePJuGExOU4eTOaGTA1Wj098HsarAdNxaOHUrHjsRjB/Kxz4GxjxFr5FOoxvAQU/DYQ6zGqGdgjVGP0PYLjz2B/wOD9SxCKdiz1gAAAABJRU5ErkJggg=="/></defs><use id="Background" href="#img1" x="22" y="6"/></svg>
	}

	return (
		<div className='flex items-center h-[286px] flex-col justify-center pb-3 '>
			<div>
				<Svg/>
			</div>
			<div className='text-center'>
				<h3 className='text-[28px] mb-2 font-light'>Photos of you</h3>
				<p className='text-sm'>When people tag you in photos, they'll appear here.</p>
			</div>
		</div>
	)
}

export default Tagged	