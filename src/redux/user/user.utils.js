export const loadUser = (data) => ({
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
});

export const singInStatus = (routeName) => {
        switch (routeName){
          case 'home':
                return true;
          default:
                return false
        }
};

export const userStatus = (routeName) => {
        switch (routeName){
          case 'home':
                return null;
          default:
                break;
        }
};