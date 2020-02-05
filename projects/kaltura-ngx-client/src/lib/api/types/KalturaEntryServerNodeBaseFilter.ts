
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaEntryServerNodeStatus } from './KalturaEntryServerNodeStatus';
import { KalturaEntryServerNodeType } from './KalturaEntryServerNodeType';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaEntryServerNodeBaseFilterArgs  extends KalturaFilterArgs {
    entryIdEqual? : string;
	entryIdIn? : string;
	serverNodeIdEqual? : number;
	serverNodeIdIn? : string;
	createdAtLessThanOrEqual? : Date;
	createdAtGreaterThanOrEqual? : Date;
	updatedAtGreaterThanOrEqual? : Date;
	updatedAtLessThanOrEqual? : Date;
	statusEqual? : KalturaEntryServerNodeStatus;
	statusIn? : string;
	serverTypeEqual? : KalturaEntryServerNodeType;
	serverTypeIn? : string;
	serverTypeNotIn? : string;
}


export class KalturaEntryServerNodeBaseFilter extends KalturaFilter {

    entryIdEqual : string;
	entryIdIn : string;
	serverNodeIdEqual : number;
	serverNodeIdIn : string;
	createdAtLessThanOrEqual : Date;
	createdAtGreaterThanOrEqual : Date;
	updatedAtGreaterThanOrEqual : Date;
	updatedAtLessThanOrEqual : Date;
	statusEqual : KalturaEntryServerNodeStatus;
	statusIn : string;
	serverTypeEqual : KalturaEntryServerNodeType;
	serverTypeIn : string;
	serverTypeNotIn : string;

    constructor(data? : KalturaEntryServerNodeBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEntryServerNodeBaseFilter' },
				entryIdEqual : { type : 's' },
				entryIdIn : { type : 's' },
				serverNodeIdEqual : { type : 'n' },
				serverNodeIdIn : { type : 's' },
				createdAtLessThanOrEqual : { type : 'd' },
				createdAtGreaterThanOrEqual : { type : 'd' },
				updatedAtGreaterThanOrEqual : { type : 'd' },
				updatedAtLessThanOrEqual : { type : 'd' },
				statusEqual : { type : 'en', subTypeConstructor : KalturaEntryServerNodeStatus, subType : 'KalturaEntryServerNodeStatus' },
				statusIn : { type : 's' },
				serverTypeEqual : { type : 'es', subTypeConstructor : KalturaEntryServerNodeType, subType : 'KalturaEntryServerNodeType' },
				serverTypeIn : { type : 's' },
				serverTypeNotIn : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaEntryServerNodeBaseFilter'] = KalturaEntryServerNodeBaseFilter;