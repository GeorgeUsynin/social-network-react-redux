import React from 'react';

const Profile = () => {
    return (
        <div className="content">
            <div>
                <img
                    src="https://images.unsplash.com/photo-1459535653751-d571815e906b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80"
                    alt="street"/>
            </div>
            <div>
                <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQsAAAC9CAMAAACTb6i8AAAAh1BMVEX///8AAAD8/Pz5+flHR0cFBQXg4OD29vbz8/Pu7u7ExMTj4+MICAjw8PC7u7tTU1OXl5d+fn5OTk6KiorOzs5oaGisrKxfX18wMDCTk5MdHR3p6emkpKTb29uGhoZ4eHgmJiZubm43NzdaWlpISEifn58/Pz+1tbUSEhIuLi7Ly8sXFxcgICD7rwteAAALAUlEQVR4nO1dCYOyOA9OUxUQQRFvxPuY6///vk1aPOnM6KzOWN8+3+43goUlD0matGkFcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcLABqP+H+jNI+hf5zL8HhB0bh1P/Ig8H+FGWdxhhEP3DTGSd8bQ5EHuMVvNWHMq/fqzfhGRLwM6w+SJM2EzjQBnQP6AlzEQ+WbDY1TIT6tSoW5fU7h8gA7YrFrhh1IpqVdMxawXPrRhKuN7oE5U4Uw6RRPC0PYtEKSE2q4MZqUdcPKUvJany9rc6cYJG/Kyhl9ci6S4ngn2H6IZ//dQ3B3cKtfYV5rHH+/bZnAbZx/Y6pdjphhAThCfyGewAh1rnf0JG23sizSBJ5iTVT9RC8TfLnsaDklo0r+k9yqrRyHZ5veVA8Pvif3ChItHak5iJnIsfOosDHe/hc3CRFGZfiPUDJuifQfDXYvxvUA+y3sn/sroy1qJ4/XWmgnbisu3bnrlKqB/sIx9eR0ZDtDMdoPEdppaHGYi+2HHRIAcYX04EXzCRuCq4oFtsbe5IWKePs7EaQDYTl/sMEl5Wjo4tDjM4xxwfdyDUMYLXF40L7ISazGpkFEdcVEXF3hSeHjw8Gb9iLtiXXoSur+ZMjrkQPWtdBvn97klcQVwEJE3n4wIqhnS95x9zQay+W2slyH3IMYiLWZ3IyL4NyUeq2aZzwgVhYisXIFclLkZiTeoik0LpjaiKVUgyv41Efs4FnbEU5z0o9SMvQvQjiTya8Tmm5DOR3Up+2o8QS/O/lumHkO2zV08dQ5ImydDjKZJ2xYjVatNjVxNPkyQJ4ZwL5tM6SPKR5wnZpXLgIdo+s5GqSO1LWDm26J67hB+80xIXL/bNIdHzRiXveAsuKMawjQsVcp7jBlxQvmodF/S8mztwwchu/7R3BgYlIW7EhXVGgtC7FxfN2z/tfaF6kftwIWxL0BBGd+PCuji8VpbhVlz0bv+090VsSL1uxIV1OUnrfnqxuP3T3hfz+3EhLPOdULmXjVTti7YG9/MXonP7x70nfEOXeuCCEnovMl6H9E2gquSLliYu6r8gwA2RmYp6D1xwacrSVP+N2OLik6+5iH9HhlshNIhwZCN1ngCZmC7s8Hh3sj80crG9//PfEvnXXLRU9m3KsdbM0mB/aPSdlunFN1zUmYup6cL4dIT3KWzENOC/50LVb1VMXSPilIKpbB9BGLio2mYjX/tORMhqnmkQFz0MaxK/8p1V2/Ti6z61WGCFYKhHw+PVEmjkwrI+FV6/5mKPvdzGwSo8n3pTvtOyWAs2hrjTKEPcmH2MRqPZu8mVolceNa0K22rEDcNaRjvHfOdZWqbbBO+G+9iWm7VKelEVa2PLzkg1NVJhGBI6jj4sQbkyyzwxTG6i807fDc0Ow1Tg1b/zo98c5WCrKl59Q0Nynh1VWGHkIrlYvR4ZpcVUn3QAKGWfcpCOkQw5M1BqWzeCsDwXQmVjBoGxK4bRSLyVjIQijTeDiVjnOqE8V8SlzFGJC/SXXJuVfRAZZ9+gYaqe0P4tCW4FLGftXIzRKitG9j5UMflrKYVHzE2FTGPb5hDpeRcm/c7KhuDp2hOvVLqJsDquqi90S9i4YqAlquW3urxwhwtew20wM7rfyro1Naz1BgVvKA2/QBbWlNxgIFX7Zs2UuH0jGfFFBVfERTAoX0/H9tUo6UrX0mIiPo7JQ1xwdbQwrv+f2le7BvxqyzmmwiVajvknhdK5hWrB2H5S2jv9XpytUSnsrXUFw+CDMpPkEi7Mi/Vsi793QD2ofc6Eefz7HD1R6pKrDfYW937qO0Fi83R9mZJuKS/pR3jJXvnamo2OU6MURNPB7KJOkWSenptJg0L4S3h8RHC8lJ5wwcLlFy2tRPS8xan7rIqFtFctCHi6YVL18szKkN3ZuEbgGNnpq72iOLOUj4zv95S/gvNVM6U89QtIONlJpWtlxHkE8nWTk1d7xaAUYnhkXhsPL4jdHxtIOVq1cJyb67ZFQl2boLqQmW0TRCYgRnqtVVUVF11lIxh9FH1Jw9Y85BSUcla041xeafHUeFwYSXlk2FZEG6UWPLp7hUi8V6P3qqyk8zRUIMgl96c/kUcpxnMYiAa5zCl7ix9IFI3EIHgeJkAVdK5ff5JLICR977l2NuW+9Icb3vjwTEQ4ODg4ODg4ODg4ODg4OPw68OhTMdq9G9zU62b2a2SOVsocvt6dR4mnS2x2v+108h/gkTJ5dvbBECoAerUa/fVRZvpnM6KM/i9DzUdIfzLVsBjbwYA+13jJVa1W81WBI0+nR6qNh1BDJTfSZ+lRw0wXQdJd6nXvUWdYpRgMBrOEC0kWi8WsDtDV5UitKb3vgXrh6DcChMkLtRzsZjyGL4vFYJCDP6qsXieS3rXw9dnFaw7QzLUmtOmGb6LSrgy6IbORi+5q8agbN0qReZ5H73Dbl570uYSZp0AR1lxwpuYASbeFj5AMkVrudD+d8BGpk4jQbw5Bai7orOT1eUsRqJpQ4gI7GzrnjdXWKB8xQO9RR4WlUGvUJfbUCg/c68WaK3FEm7ePI4FJzqSlvi/mE9OJKm1FX3gA8YbOai5Au5lld6D+NkkvOhsl+rpC5IhHnlIsuEDodYszBxuhR5ezHsu052L/RtNUHRBNpCrxRtkI6rPcptmZLE+4INZeSDEWLXhUb8FcJJNJQk+8fU3pQ37GBYY8hyiZi0mbGqS7of60MkzSVBIXgR9uWoW/aG34JpnioM17mB7pBfTH5HJfpsHDkiHFejxed4iLRY8+hOd6QZ6P+gSlF31qMN7tc5Aux71xz0Pv/VUMUhZP2UiTmowz0os3iEilNBcLfc2c7c1L1caofyXul1BiMkw2AoJnR0ee5uJkmZS2BgDSi0EM1E0e/AWjWecSnbjgQvuYbkv/1M3iUddbFf6CuNitjjvhQqKEyQYO/mIH5oLfLvmLGvcQJS6ANwMI+wcuvNmbXm+QDx50kdG3XLAD7M64T/2MC+gp4UpcSBgvFgcu6h+e/o2w6ONBOxO5q+EvbASP+lRkLrjN7IU6i2Mbwb2NUJ/qYXe604u0+Lqp52EnQvlOPpfzTgd1Lv2qbx7UX3gqKAKu2e0v+80OcTHoL5cdGBa+k3fDyRoBwHRGDZZZkXhMJrvrKQL3Rj2tF+moTxfXAFZ13a4dI3nfJJkO9LqLTX/b+tl89S8AY51hYBYzqMvs0J9tgCGXT8RFipaTjeSqwW5XnDw/vj6MUX3QbXwJdR1nY0ZZSkSn6jV1H+mtu5NHDTsBzmKffV6K+3VVEg+/pHvY4QCLEJQE5E/y8MvDUBzAPv1VsRbfRzd4UNfJwJM/UD465OOmF4pH3xtucJK2P65GODg43AQoi7E+yX5Se0CUymlKFT2B/l41kw/sGG8A3bHI3QclOMePKvbQQ51Y/PiMfKoiLQMQfT9CDyP0o0CNWdaICk96fsBq4PN2UhxwBdILgkfNQW8DXpc9SvMpVGDYHdP7386TDtBx/XVKIdhbP61DPgcYpLVht2XrGqJLgTD3w0prRHF5D6Rsc7SUzjMY8kBwmzVhOA+hkmbr6dj2NRLfQcI8qs3DCrTe2BYo1fJqi/4QEv5dpyU1CAfdCSwyOawHz84FwDwIE2hDa9kiLxl3u3na8Zuai7f+vJ7W/T6ry3qZ2vr7XRcDPbV3KztRfu+eT56UjEX3IXQkiwFy+h6f23k6ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4PAv+A6PPfY5EVGkVAAAAAElFTkSuQmCC"
                    alt="cat"/>
            </div>
            <div>
                My posts
            </div>
            <div>New posts</div>
            <div>
                <div>post1</div>
                <div>post2</div>
            </div>


        </div>
    );
}

export default Profile;