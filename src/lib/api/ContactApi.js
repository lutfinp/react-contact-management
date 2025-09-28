export const contactCreate = async ({
    first_name,
    last_name,
    email,
    phone,
    token,
}) => {
    return await fetch(`${import.meta.env.VITE_API_PATH}/contacts`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: token },
        body: JSON.stringify({
            first_name,
            last_name,
            email,
            phone,
        }),
    });
};

export const getContact = async ({ token }) => {
    return await fetch(`${import.meta.env.VITE_API_PATH}/contacts`, {
        method: "GET",
        headers: { "Content-Type": "application/json", Authorization: token },
    });
};

export const getContactById = async ({ id, token }) => {
    return await fetch(`${import.meta.env.VITE_API_PATH}/contacts/${id}`, {
        method: "GET",
        headers: { "Content-Type": "application/json", Authorization: token },
    });
};

export const updateContact = async ({
    id,
    token,
    first_name,
    last_name,
    email,
    phone,
}) => {
    return await fetch(`${import.meta.env.VITE_API_PATH}/contacts/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json", Authorization: token },
        body: JSON.stringify({
            first_name,
            last_name,
            email,
            phone,
        }),
    });
};

export const deleteContact = async ({ id, token }) => {
    return await fetch(`${import.meta.env.VITE_API_PATH}/contacts/${id}`, {
        method: "DELETE",
        headers: { "Contect-Type": "application/json", Authorization: token },
    });
};
