
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
- **Invalidate cache with Hooks**: Utilize hooks to invalidate SWR cache keys, allowing for fine-grained control over data revalidation.
- **Manual Key Invalidator**: A feature that provides developers with a method to manually invalidate SWR cache keys, offering flexibility in managing the cache invalidation strategy.
- **Automatic Prefix-based Key Invalidation**: Introduces an innovative feature that automatically invalidates SWR cache keys based on specified prefixes. This enhancement allows developers to efficiently manage cache consistency by targeting groups of related data, ensuring that updates to one part of the application automatically trigger revalidation of all associated data without manual intervention.

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
const { currentUser } = useFrappeAuth({}, {realtimeUserValidation: true, method: // Optional custom user check method});
```
This feature enhances security and maintains a consistent user experience by ensuring that user sessions are accurately managed.

## Invalidate cache with Hooks
The `frappe-react-hooks` library allows for SWR cache invalidation directly through specific hooks upon successful API calls. By passing an invalidateKeys parameter containing an array of SWR keys, you can ensure that the specified keys are invalidated, and the related data is re-fetched to maintain data consistency across your application.

#### Usage with Data Manipulation Hooks
When performing create, update, or delete operations, you can specify invalidateKeys to refresh related data automatically.
```bash
const { createDoc } = useFrappeCreateDoc({
  invalidateKeys: ['swrKey']
});

const { updateDoc } = useFrappeUpdateDoc({
  invalidateKeys: ['swrKey']
});

const { deleteDoc } = useFrappeDeleteDoc({
  invalidateKeys: ['swrKey']
});
```
#### Usage with API Call Hooks
Similar to data manipulation hooks, you can also invalidate cache keys after successful custom API calls.
```bash
const { call } = useFrappePostCall(method, {
  invalidateKeys: ['swrKey']
});

const { call } = useFrappePutCall(method, {
  invalidateKeys: ['swrKey']
});

const { call } = useFrappeDeleteCall(method, {
  invalidateKeys: ['swrKey']
});
```

## Manual Cache Key Invalidator
`frappe-react-hooks` offers a manual key invalidator function that provides explicit control over when and how SWR cache keys are invalidated. This functionality is essential for cases where developers need to enforce cache invalidation based on custom logic or external events.

```bash
import { keyInvalidator } from 'frappe-react-hooks';

keyInvalidator(['swrKey1', 'swrKey2']);
```

## Automatic Prefix-based Key Invalidation

In dynamic applications, ensuring the freshness and consistency of your data without manual intervention is crucial. The `frappe-react-hooks` library simplifies this process with its **Automatic Prefix-based Key Invalidation** feature, specifically designed to automate the cache invalidation process for keys that begin with specified prefixes.

#### Effortless Cache Invalidation

The beauty of Automatic Prefix-based Key Invalidation lies in its simplicity. Developers don't need to perform any additional steps to benefit from this feature. Once configured, `frappe-react-hooks` automatically detects any cache keys that start with the designated prefixes and invalidates them as needed. This process runs seamlessly in the background, ensuring that your data remains consistent and up-to-date without any extra effort.

#### Key Features

- **Zero Configuration for Invalidation**: There's no need for explicit actions to trigger cache invalidation for keys with specified prefixes. The library intelligently identifies and invalidates these keys automatically.
- **Real-time Data Accuracy**: By automatically invalidating cache keys based on prefixes, this feature ensures that your application always retrieves the most current data, enhancing the overall user experience.
- **Reduced Development Overhead**: Eliminates the need for manual cache management, allowing developers to focus on building features rather than managing data consistency.

#### How It Works

The Automatic Prefix-based Key Invalidation feature operates under the hood, requiring no direct intervention from developers. It monitors for any updates or changes that should trigger cache invalidation for keys starting with the configured prefixes. This automatic detection and invalidation mechanism ensures that your application's data is always fresh, without the need for manual cache key management.

By incorporating this feature, `frappe-react-hooks` significantly simplifies the process of maintaining data consistency across your application, making it an ideal choice for projects requiring robust and efficient data handling capabilities.


## Documentation
For detailed API usage and guidelines, refer to the `frappe-react-sdk` [documentation](https://github.com/nikkothari22/frappe-react-sdk). `frappe-react-hooks` maintains compatibility with `frappe-react-sdk` while extending its capabilities.

## Installation

To add `frappe-react-hooks` to your project, use npm or yarn:

```bash
npm install frappe-react-hooks
# or
yarn add frappe-react-hooks 
