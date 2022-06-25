import axios from "axios";

export const baseURL = "https://sanbers-news-api.herokuapp.com/api";

export const client = axios.create({
    baseURL: baseURL,
    headers: {
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmFhOWE2YjQ4MjAzYzhhNDYzZDIyNzEiLCJpYXQiOjE2NTUzNDc4MjB9.G6Ed41jl6yFP6Rl-XKF4WlT5JLX1Numnjs3gGeyO_bk",
    },
});
