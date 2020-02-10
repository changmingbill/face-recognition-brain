export const loadUser = (data) => ({
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
})