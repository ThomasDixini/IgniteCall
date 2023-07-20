import { Box, Text, styled } from "@ignite-ui/react";

export const ConnectBox = styled(Box, {
    marginTop: '$6',
    display: 'flex',
    flexDirection: 'column'
})

export const ConnectItem = styled('div', {
    marginTop: '$6',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '$4 $6',
    border: '2px solid $gray600',
    borderRadius: '$md',
    marginBottom: '$4'
})

export const AuthError = styled(Text, {
    color: '#f75a68',
    marginBottom: '$4'
})