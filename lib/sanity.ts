import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: '4zvwsvs8',
  dataset: 'production',
  apiVersion: '2022-02-13',
  token: 'skkoEWPHSqPWdfQHAjRhzDrRinO4H8KOXGRsv4HZ3qZSKDDoS4xSza0MgJKbVGYfTjIkUb3utHAZPzfviy7txiPT2vlrZ7y3OQp51AavVsZOKYJesIf0LihU5lzKSYU8z9Kgrndvbj8DnxrXyxO8Lkl2AnCoJwipf3WmMj2TFKZn4bioZ9W1',
  useCdn: false // will ensure we get fresh data each time
});
