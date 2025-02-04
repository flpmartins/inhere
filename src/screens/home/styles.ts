import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 16,
  },
  subTitle: {
    color: '#6B6B6B',
    fontSize: 18,
    marginBottom: 16,
  },
  form: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 26,
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: '#1F1E25',
    borderRadius: 5,
    color: '#FFFFFF',
    padding: 16,
    fontSize: 16,
  },
  button: {
    height: 56,
    width: 56,
    backgroundColor: '#31CF67',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },

  inputPlaceHolder: {
    color: '#6B6B6B',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 24,
  },
  emptyText: {
    color: '#FFFF',
    fontSize: 18,
    textAlign: 'center',
  },
})
