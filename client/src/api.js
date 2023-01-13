import axios from "axios"


axios.interceptors.request.use(
	function (config) {
		const { origin } = new URL(config.url);

		const allowedOrigins = ["http://127.0.0.1:4000"];
		const token = localStorage.getItem("access-token");

		if (allowedOrigins.includes(origin)) {
			config.headers.authorization = token;
		}

		return config;
	},
	function (error) {
		// Do something with request error
		return Promise.reject(error);
	}
);



export const fetchProductList = async () => {

    const { data } = await axios.get("http://127.0.0.1:4000/product")

    return data
};

export const fetchProduct = async (id) => {

    const { data } = await axios.get(`http://127.0.0.1:4000/product/${id}`)

    return data
};


export const fetchRegister = async (input) => {
    const { data } = await axios.post(
        "http://127.0.0.1:4000/auth/register",
        input
    )

    return data;
};

export const fetchLogin = async (input) => {
	const { data } = await axios.post(
		"http://127.0.0.1:4000/auth/login",
		input
	);

	return data;
};


export const fetchMe = async () => {
	const { data } = await axios.get("http://127.0.0.1:4000/auth/me");


	return data;
};


export const fetchLogout = async () => {
	const { data } = await axios.post(
		"http://127.0.0.1:4000/auth/logout",
		{
			refresh_token: localStorage.getItem("refresh-token"),
		}
	);

	return data;
};




export const postOrder = async(input) => {

	const {data} = await axios.post("http://127.0.0.1:4000/order", input)

	return data

}

export const fetchOrders = async () => {
	const { data } = await axios.get(
		"http://127.0.0.1:4000/order"
	);

	return data;
};

export const deleteProduct = async (product_id) => {
	const { data } = await axios.delete(
		`http://127.0.0.1:4000/product/${product_id}`
	);

	return data;
};

export const updateProduct = async (input, product_id) => {
	const { data } = await axios.put(
		`http://127.0.0.1:4000/product/${product_id}`,
		input
	);

	return data;
};

export const postProduct = async (input) => {
	const { data } = await axios.post(
		`http://127.0.0.1:4000/product/`,
		input
	);

	return data;
};