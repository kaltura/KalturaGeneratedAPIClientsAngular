
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaLicenseType } from './KalturaLicenseType';
import { KalturaSearch, KalturaSearchArgs } from './KalturaSearch';

export interface KalturaSearchResultArgs  extends KalturaSearchArgs {
    id? : string;
	title? : string;
	thumbUrl? : string;
	description? : string;
	tags? : string;
	url? : string;
	sourceLink? : string;
	credit? : string;
	licenseType? : KalturaLicenseType;
	flashPlaybackType? : string;
	fileExt? : string;
}


export class KalturaSearchResult extends KalturaSearch {

    id : string;
	title : string;
	thumbUrl : string;
	description : string;
	tags : string;
	url : string;
	sourceLink : string;
	credit : string;
	licenseType : KalturaLicenseType;
	flashPlaybackType : string;
	fileExt : string;

    constructor(data? : KalturaSearchResultArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSearchResult' },
				id : { type : 's' },
				title : { type : 's' },
				thumbUrl : { type : 's' },
				description : { type : 's' },
				tags : { type : 's' },
				url : { type : 's' },
				sourceLink : { type : 's' },
				credit : { type : 's' },
				licenseType : { type : 'en', subTypeConstructor : KalturaLicenseType, subType : 'KalturaLicenseType' },
				flashPlaybackType : { type : 's' },
				fileExt : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSearchResult',KalturaSearchResult);
