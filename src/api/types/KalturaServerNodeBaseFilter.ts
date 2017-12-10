
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaServerNodeStatus } from './KalturaServerNodeStatus';
import { KalturaServerNodeType } from './KalturaServerNodeType';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaServerNodeBaseFilterArgs  extends KalturaFilterArgs {
    idEqual? : number;
	idIn? : string;
	createdAtGreaterThanOrEqual? : Date;
	createdAtLessThanOrEqual? : Date;
	updatedAtGreaterThanOrEqual? : Date;
	updatedAtLessThanOrEqual? : Date;
	heartbeatTimeGreaterThanOrEqual? : Date;
	heartbeatTimeLessThanOrEqual? : Date;
	nameEqual? : string;
	nameIn? : string;
	systemNameEqual? : string;
	systemNameIn? : string;
	hostNameLike? : string;
	hostNameMultiLikeOr? : string;
	hostNameMultiLikeAnd? : string;
	statusEqual? : KalturaServerNodeStatus;
	statusIn? : string;
	typeEqual? : KalturaServerNodeType;
	typeIn? : string;
	tagsLike? : string;
	tagsMultiLikeOr? : string;
	tagsMultiLikeAnd? : string;
	dcEqual? : number;
	dcIn? : string;
	parentIdLike? : string;
	parentIdMultiLikeOr? : string;
	parentIdMultiLikeAnd? : string;
}


export class KalturaServerNodeBaseFilter extends KalturaFilter {

    idEqual : number;
	idIn : string;
	createdAtGreaterThanOrEqual : Date;
	createdAtLessThanOrEqual : Date;
	updatedAtGreaterThanOrEqual : Date;
	updatedAtLessThanOrEqual : Date;
	heartbeatTimeGreaterThanOrEqual : Date;
	heartbeatTimeLessThanOrEqual : Date;
	nameEqual : string;
	nameIn : string;
	systemNameEqual : string;
	systemNameIn : string;
	hostNameLike : string;
	hostNameMultiLikeOr : string;
	hostNameMultiLikeAnd : string;
	statusEqual : KalturaServerNodeStatus;
	statusIn : string;
	typeEqual : KalturaServerNodeType;
	typeIn : string;
	tagsLike : string;
	tagsMultiLikeOr : string;
	tagsMultiLikeAnd : string;
	dcEqual : number;
	dcIn : string;
	parentIdLike : string;
	parentIdMultiLikeOr : string;
	parentIdMultiLikeAnd : string;

    constructor(data? : KalturaServerNodeBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaServerNodeBaseFilter' },
				idEqual : { type : 'n' },
				idIn : { type : 's' },
				createdAtGreaterThanOrEqual : { type : 'd' },
				createdAtLessThanOrEqual : { type : 'd' },
				updatedAtGreaterThanOrEqual : { type : 'd' },
				updatedAtLessThanOrEqual : { type : 'd' },
				heartbeatTimeGreaterThanOrEqual : { type : 'd' },
				heartbeatTimeLessThanOrEqual : { type : 'd' },
				nameEqual : { type : 's' },
				nameIn : { type : 's' },
				systemNameEqual : { type : 's' },
				systemNameIn : { type : 's' },
				hostNameLike : { type : 's' },
				hostNameMultiLikeOr : { type : 's' },
				hostNameMultiLikeAnd : { type : 's' },
				statusEqual : { type : 'en', subTypeConstructor : KalturaServerNodeStatus, subType : 'KalturaServerNodeStatus' },
				statusIn : { type : 's' },
				typeEqual : { type : 'es', subTypeConstructor : KalturaServerNodeType, subType : 'KalturaServerNodeType' },
				typeIn : { type : 's' },
				tagsLike : { type : 's' },
				tagsMultiLikeOr : { type : 's' },
				tagsMultiLikeAnd : { type : 's' },
				dcEqual : { type : 'n' },
				dcIn : { type : 's' },
				parentIdLike : { type : 's' },
				parentIdMultiLikeOr : { type : 's' },
				parentIdMultiLikeAnd : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaServerNodeBaseFilter',KalturaServerNodeBaseFilter);
