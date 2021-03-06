
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDropFolder, KalturaDropFolderArgs } from './KalturaDropFolder';

export interface KalturaWebexDropFolderArgs  extends KalturaDropFolderArgs {
    webexUserId? : string;
	webexPassword? : string;
	webexSiteId? : number;
	webexPartnerId? : string;
	webexServiceUrl? : string;
	webexHostIdMetadataFieldName? : string;
	deleteFromRecycleBin? : boolean;
	webexServiceType? : string;
	webexSiteName? : string;
	deleteFromTimestamp? : Date;
}


export class KalturaWebexDropFolder extends KalturaDropFolder {

    webexUserId : string;
	webexPassword : string;
	webexSiteId : number;
	webexPartnerId : string;
	webexServiceUrl : string;
	webexHostIdMetadataFieldName : string;
	deleteFromRecycleBin : boolean;
	webexServiceType : string;
	webexSiteName : string;
	deleteFromTimestamp : Date;

    constructor(data? : KalturaWebexDropFolderArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaWebexDropFolder' },
				webexUserId : { type : 's' },
				webexPassword : { type : 's' },
				webexSiteId : { type : 'n' },
				webexPartnerId : { type : 's' },
				webexServiceUrl : { type : 's' },
				webexHostIdMetadataFieldName : { type : 's' },
				deleteFromRecycleBin : { type : 'b' },
				webexServiceType : { type : 's' },
				webexSiteName : { type : 's' },
				deleteFromTimestamp : { type : 'd' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaWebexDropFolder'] = KalturaWebexDropFolder;