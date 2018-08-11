

export enum KalturaDropFolderFileErrorCode {
    errorAddingBulkUpload = 'dropFolderXmlBulkUpload.ERROR_ADDING_BULK_UPLOAD',
	errorAddingContentProcessor = '10',
	errorAddContentResource = 'dropFolderXmlBulkUpload.ERROR_ADD_CONTENT_RESOURCE',
	errorAddEntry = '2',
	errorDeletingFile = '12',
	errorDownloadingFile = '7',
	errorInBulkUpload = 'dropFolderXmlBulkUpload.ERROR_IN_BULK_UPLOAD',
	errorInContentProcessor = '11',
	errorReadingFile = '6',
	errorUpdateEntry = '1',
	errorUpdateFile = '8',
	errorWritingTempFile = 'dropFolderXmlBulkUpload.ERROR_WRITING_TEMP_FILE',
	fileNoMatch = '13',
	flavorMissingInFileName = '4',
	flavorNotFound = '3',
	localFileWrongChecksum = 'dropFolderXmlBulkUpload.LOCAL_FILE_WRONG_CHECKSUM',
	localFileWrongSize = 'dropFolderXmlBulkUpload.LOCAL_FILE_WRONG_SIZE',
	malformedXmlFile = 'dropFolderXmlBulkUpload.MALFORMED_XML_FILE',
	slugRegexNoMatch = '5',
	xmlFileSizeExceedLimit = 'dropFolderXmlBulkUpload.XML_FILE_SIZE_EXCEED_LIMIT'
}