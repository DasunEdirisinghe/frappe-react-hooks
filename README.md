
# frappe-react-hooks

An extended React hooks library for the [Frappe Framework](https://frappeframework.com) backend, enhancing [frappe-react-sdk](https://github.com/nikkothari22/frappe-react-sdk) with additional functionalities and customizations for an optimized development experience in Frappe-powered applications.

<p align="center">
  <a href="https://github.com/DasunEdirisinghe/frappe-react-hooks"><img src="https://img.shields.io/maintenance/yes/2023?style=flat-square" alt="Maintenance" /></a>
  <a href="https://github.com/DasunEdirisinghe/frappe-react-hooks"><img src="https://img.shields.io/github/license/DasunEdirisinghe/frappe-react-hooks?style=flat-square" alt="License" /></a>
  <a href="https://www.npmjs.com/package/frappe-react-hooks"><img src="https://img.shields.io/npm/v/frappe-react-hooks?style=flat-square" alt="npm version" /></a>
  <a href="https://www.npmjs.com/package/frappe-react-hooks"><img src="https://img.shields.io/npm/dw/frappe-react-hooks?style=flat-square" alt="npm downloads" /></a>
</p>

## Features

`frappe-react-hooks` offers the following enhancements over `frappe-react-sdk`:

- **Default SWR Configuration**: Enables global SWR configuration via `FrappeProvider` for streamlined cache management and polling.
- **Real-time User Validation**: Improves the `useFrappeAuth` hook to support real-time user validation, ensuring user states are up-to-date.

## Default SWR Configuration
Initialize `frappe-react-hooks` by wrapping your application's root component with `FrappeProvider`, specifying the URL of your Frappe server and default SWR configuration as needed:

```bash
function App() {
    return (
        <FrappeProvider
            url="https://my-frappe-server.frappe.cloud"
            swrConfig={{
                refreshInterval: 3000,
                dedupingInterval: 2000, 
		{/* Other configurations go here */} 
	    }}>
	     {/* Application components go here */ } 
	</FrappeProvider > 
    ); 
}
```
`frappe-react-hooks` integrates predefined SWR configurations to streamline the data fetching experience. These settings are designed to optimize performance and user experience by modifying the default SWR behavior:
```bash
{
   revalidateOnFocus:  false,
   revalidateIfStale:  false,
   shouldRetryOnError:  false,
   suspense:  false
}
```
## Real-time User Validation
`frappe-react-hooks` introduces **Real-time User Validation**, which actively validates the user's authentication status by executing   `frappe.realtime.get_user_info`, enabled with `{realtimeUserValidation: true}`. It ensures the application's user state is always current by executing `frappe.realtime.get_user_info`. Or you can pass a custom auth check method to override default `frappe.realtime.get_user_info` user check method
```bash
const { currentUser } = useFrappeAuth({}, {realtimeUserValidation: true, method: // Optional custom user chech method});
```
This feature enhances security and maintains a consistent user experience by ensuring that user sessions are accurately managed.

## Documentation
For detailed API usage and guidelines, refer to the `frappe-react-sdk` [documentation](https://github.com/nikkothari22/frappe-react-sdk). `frappe-react-hooks` maintains compatibility with `frappe-react-sdk` while extending its capabilities.

## Installation

To add `frappe-react-hooks` to your project, use npm or yarn:

```bash
npm install frappe-react-hooks
# or
yarn add frappe-react-hooks 
