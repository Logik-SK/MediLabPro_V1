// api.js

/** GET all patients */
export async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}

/** GET data by ID */
export async function fetchDataById(url, id) {
    try {
        const response = await fetch(`${url}/${id}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching data by ID:", error);
        throw error;
    }
}

/** POST request - Add new data */
export async function postData(url, data) {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error posting data:", error);
        throw error;
    }
}

/** PUT request - Update data */
export async function putData(url, id, data) {
    try {
        const response = await fetch(`${url}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error updating data:", error);
        throw error;
    }
}

/** DELETE request - Remove data */
export async function deleteData(url, id) {
    try {
        const response = await fetch(`${url}/${id}`, { method: "DELETE" });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response;
    } catch (error) {
        console.error("Error deleting data:", error);
        throw error;
    }
}
